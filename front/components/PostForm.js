import React, {useCallback, useRef, useState} from 'react';
import {Button, Form, Input} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../reducers/post";

const PostForm = () => {
    const { imagePaths } = useSelector((state) => state.post);
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, setText] = useState('');
    const onSubmit = useCallback(() => {
        dispatch(addPost);
        setText('');
    }, []);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);
    
    const imageUpload = useCallback(() => {
        imageInput.current.click();
    }, []);
    


    return (
        <Form style={{margin : '10px 0 20px'}} encType="multipart/form-data" onFinish={onSubmit}>
            <Input.TextArea value={text} onChange={onChangeText} maxLength={140} placeholder="textext" />
            <div>
                <input type="file" multiple hidden ref={imageInput} />
                <Button onClick={imageUpload}>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right'}} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {imagePaths.map((v) => (
                    <div key={v} style={{ display: 'inline-block'}}>
                        <img src={v} style={{ width: '200px'}} alt={v} />
                        <div>
                            <Button>제거</Button>
                        </div>
                    </div>
                    ))}
            </div>
        </Form>
    );
};

export default PostForm;