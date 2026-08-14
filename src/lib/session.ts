export const DEMO_USERNAME = "CBD78429103";
export const DEMO_PASSWORD = "Hamad#4821";

const STORAGE_KEY = "cbd-session";
const SESSION_MS = 15 * 60 * 1000;
const REMEMBER_MS = 8 * 60 * 60 * 1000;

export type BankSession = {
  username: string;
  expiresAt: number;
};

function readRaw(): BankSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as BankSession;
    if (!parsed?.username || typeof parsed.expiresAt !== "number") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function peekSession(): "ok" | "expired" | "missing" {
  const session = readRaw();
  if (!session) return "missing";
  if (Date.now() >= session.expiresAt) {
    clearSession();
    return "expired";
  }
  return "ok";
}

export function getSession(): BankSession | null {
  if (peekSession() !== "ok") return null;
  return readRaw();
}

export function isSessionActive() {
  return getSession() !== null;
}

export function createSession(username: string, remember = false) {
  const session: BankSession = {
    username,
    expiresAt: Date.now() + (remember ? REMEMBER_MS : SESSION_MS),
  };
  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  return session;
}

export function clearSession() {
  if (typeof window === "undefined") return;
  window.sessionStorage.removeItem(STORAGE_KEY);
}

export function credentialsMatch(username: string, password: string) {
  return (
    username.trim() === DEMO_USERNAME && password === DEMO_PASSWORD
  );
}
