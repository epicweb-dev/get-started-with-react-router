import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './styles/index.css'
import { router } from './routes.tsx'

createRoot(document.getElementById('🧭')!).render(
	<RouterProvider router={router} />,
)
