// Returns the linear blend of x1 and x2.
export const lerp = (v, x1 = 0, x2 = 1) => x1 + ((x2 - x1) * v)

// Normalize values between 0 and 1.
export const norm = (v, x1 = 0, x2 = 1) => (v - x1) / (x2 - x1)

// Translate values from one coordinate space to another.
export const cast = (v, x1, x2, y1, y2) => lerp(norm(v, x1, x2), y1, y2)

// Constrain values within range.
export const curb = (x, hi = 0, lo = 0) => (x < lo ? lo : (x > hi ? hi : x))

// Get arbitrary random number in range, hi exclusive, lo inclusive.
export const randF = (hi = 0, lo = 0) => (Math.random() * (hi - lo)) + lo

// Get random integer as above.
export const rand = (...args) => Math.floor(randF(...args))

// Calculate distance between two points.
export const dist = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1)

export { norm as mag, cast as map }
