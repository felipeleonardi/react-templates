import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('renders app', async () => {
		render(<App />);
		const appElement = await screen.findByTestId('app');
		expect(appElement).toBeInTheDocument();
	});
})
