import { authConfig } from '@/libs/auth/auth';
import NextAuth, {AuthOptions} from 'next-auth';

const handler = NextAuth(authConfig);


export {handler as GET, handler as POST}