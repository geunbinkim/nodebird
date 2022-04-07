import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import {Button, Checkbox, Form, Input} from 'antd';
import AppLayout from "../components/AppLayout";
import useInput from "../hooks/useInput";
import styled from 'styled-components';

const Signup = () => {
    const ErrorMessage = styled.div`
        color : red
   `;

    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(true);
    const [termError, setTermError] = useState(true);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(!e.target.checked);
        console.log(`term : ${term}, termError : ${termError}`);
    }, [term]);

    const onSubmit = useCallback(() => {
        if(password !== passwordCheck){
            return setPasswordError(true);
        }

        if(!term){
            return setTermError(true);
        }
    }, [term, password, passwordCheck]);


    return (
        <AppLayout>
            <Head>
                <title>Sign Up | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input className="user-id" name="user-id" value={id} required onChange={onChangeId}  />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input className="user-nick" name="user-nick" value={nickname} required onChange={onChangeNickname}  />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input className="user-password" name="user-password" type="password" value={password} required onChange={onChangePassword}  />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br/>
                    <Input className="user-password-check" name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck}  />
                    { passwordError ? <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage> : <></> }
                </div>
                <div>
                    <Checkbox className="user-term" name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                    { termError ? <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage> : <></> }
                </div>
                <div style={{ marginTop : 10 }}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;