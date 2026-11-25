import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import router from './routes/index.tsx';
import { RouterProvider } from 'react-router';
import { Contexts } from './contexts';

createRoot(document.getElementById('root')!).render( // exclamação para garantir que o elemento não seja nulo
	<StrictMode>
		<Contexts>
			<RouterProvider router={router} />
		</Contexts>
	</StrictMode>
);
