import { createCookieSessionStorage, redirect } from "@remix-run/node";
import User from "~/backend/src/models/UserModel";

const sessionSecret = process.env.SESSION_SECRET ;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "_session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function requireUserId(
  request,
  redirectTo = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId) {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/login`);
  }
  return userId;
}

export async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId ) return null;
  return userId;
}

export async function getUser(request) {
  const userId = await getUserId(request);
  if (!userId) {
    return null;
  }
  try {
    const user = await User.findOne({userId});
    return user;
  } catch {
    throw logout(request);
  }
}

export async function logout(request) {
  const session = await getUserSession(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}

export async function createUserSession(
  request,
  userId,
  redirectTo
) {
  const session = await storage.getSession();
  session.set("userId", userId);
  getUserId(request);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}
