import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { SignIn } from '../components/SignIn';
import { SignUp } from '../components/SignUp';
import { User } from '../components/User';

export const routes = <Layout>
    <Route exact path='/' component={ SignIn } />
    <Route path='/signUp' component={ SignUp } />
    <Route path='/user' component={ User } />
</Layout>;
