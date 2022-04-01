import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";

const Profile = () => {
    return (
        <>
            <Head>
                <title>프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <div>프로필</div>
            </AppLayout>
        </>
    );
};

export default Profile;