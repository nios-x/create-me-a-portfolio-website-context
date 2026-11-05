import { useEffect } from "react"
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import ArchitectureSystems from "./pages/ArchitectureSystems"

/** Start every route at the top, the way a multi-page site behaves. */
function ScrollToTop() {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

// The deployment is served from a sub-path; Vite exposes it as BASE_URL.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/"

export default function App() {
	return (
		<BrowserRouter basename={basename}>
			<ScrollToTop />
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/systems" element={<ArchitectureSystems />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	)
}
