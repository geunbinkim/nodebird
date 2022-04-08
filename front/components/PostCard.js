import React from 'react';
import {Avatar, Button, Card, Popover} from "antd";
import {EllipsisOutlined, HeartOutlined, MessageOutlined, RetweetOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import PostImages from "./PostImages";

const PostCard = ({ post }) => {
    const id = useSelector((state) => state.user.me?.id);
    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart" />,
                    <MessageOutlined key="comment" />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id ? (
                                <>
                                    <Button>수정</Button>
                                    <Button type="danger">삭제</Button>
                                </>) : <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>
                ]}
            >
                <Card.Meta title={post.User.nickname} avatar={<Avatar>{post.User.nickname[0]}</Avatar>} description={post.content} />
                {/*<Image />*/}
                {/*<Content />*/}
                {/*<Buttons />*/}
            </Card>
            {/*<CommentForm />*/}
            {/*<Comments />*/}
        </div>
    );
};

export default PostCard;