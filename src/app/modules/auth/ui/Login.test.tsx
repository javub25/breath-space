
import {render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import {LoginMock} from '@/app/modules/auth/ui/Login.mock.tsx';

jest.mock('@/app/database/infraestructure/config/env.ts', () => ({
    viteUrl: 'fake-vite-url',
    vercelUrl: 'fake-vercel-url',
    localhostUrl: 'fake-localhost-url',
    localhostPort: '3000',
    supabaseUrl: 'https://fake-supabase-url.com',
    supabaseKey: 'this-is-a-fake-key-for-test',
}));

describe('Login Test', () => {

    test('it shows log out button once logged in', () => 
    {
        render(<LoginMock authenticatedUser="Francisco" />);

        const logOutButton = screen.getByRole('button', {name: /log out/i});
        
        expect(logOutButton).toBeInTheDocument();
    });

    test("it shows log in button once not logged in", () => 
    {
        render(<LoginMock authenticatedUser="" />);

        const logInButton = screen.getByRole('button', {name: /log in/i});

        expect(logInButton).toBeInTheDocument();
    })
});

