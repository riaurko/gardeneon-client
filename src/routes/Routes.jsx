import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import ShareTipPage from "../pages/ShareTipPage";
import BrowseTipsPage from "../pages/BrowseTipsPage";
import TipDetailsPage from "../pages/TipDetailsPage";
import ExploreGardenersPage from "../pages/ExploreGardenersPage";

const router = createBrowserRouter([
	{
		path: "/",
		Component: RootLayout,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/login",
				Component: LoginPage,
			},
			{
				path: "/signup",
				Component: SignUpPage,
			},
			{
				path: "/gardeners",
				Component: ExploreGardenersPage,
			},
			{
				path: "/share-tip",
				Component: ShareTipPage,
			},
			{
				path: "/browse-tips",
				Component: BrowseTipsPage,
				loader: () => fetch("https://a10-gardeneon-server.vercel.app/tips"),
			},
			{
				path: "/tip/:id",
				Component: TipDetailsPage,
				loader: () => fetch("https://a10-gardeneon-server.vercel.app/tips"),
			},
		
		],
	},
]);

export default router;
