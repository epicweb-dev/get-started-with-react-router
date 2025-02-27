import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './styles/index.css'
import { AppRoutes } from './routes.tsx'

createRoot(document.getElementById('🧭')!).render(
	<BrowserRouter>
		<AppRoutes />
	</BrowserRouter>,
)
