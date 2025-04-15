import {createCallerFactory, createTRPCRouter} from "@/server/api/trpc"; /**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
import {editTokenRouter} from "./routers/editToken";
import {ratingRouter} from "./routers/rating";
import {storyRouter} from "./routers/story";

export const appRouter = createTRPCRouter({
	story: storyRouter,
	rating: ratingRouter,
	editToken: editTokenRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
