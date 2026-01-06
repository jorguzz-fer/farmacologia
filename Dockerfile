# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the application
# This will generate dist/public (client) and dist/index.cjs (server)
RUN npm run build

# Prune development dependencies
# We need to install production dependencies only for the runner stage if we weren't bundling everything
# But looking at script/build.ts, the server is bundled into a single file dist/index.cjs
# However, standard practice is to keep node_modules if not fully standalone or for bindings.
# The custom build script seems to bundle server deps partially (allowlist).
# Let's verify if we need node_modules in the final image.
# The build script says: "server deps to bundle to reduce openat(2) syscalls... allowlist".
# And then it marks everything else as external.
# So we DO need node_modules for non-allowlisted deps.
RUN npm prune --production

# Runner stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

# Copy built artifacts
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/v5 ./v5
COPY --from=builder /app/v6 ./v6

# Copy production node_modules
COPY --from=builder /app/node_modules ./node_modules

# Expose the port
EXPOSE 5000

# Start the application
CMD ["npm", "run", "start"]
