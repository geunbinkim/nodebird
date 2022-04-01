import React from 'react';
import Head from 'next/head';
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import FollowerList from "../components/FollowerList";


const Profile = () => {
    const followList = [{nickname: "terry"}, {nickname: 'terry2'}];
    const followerList = [{nickname: "terry"}, {nickname: 'terry2'}];
    return (
        <>
            <Head>
                <title>프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followList}  />
                <FollowerList header="팔로워 목록" data={followerList} />
            </AppLayout>
        </>
    );
};

export default Profile;