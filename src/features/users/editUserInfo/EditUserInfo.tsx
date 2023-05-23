import React, { ChangeEvent, useState } from "react";
import { Form, Input } from "antd";
import { User } from "@models/user.model";

type EditUserInfoType = {
  user: User;
};

export const EditUserInfo: React.FC<EditUserInfoType> = ({ user }) => {
  const [inputName, setInputName] = useState({
    name: user.name,
  });
  const [inputNickname, setInputNickname] = useState({
    username: user.username,
  });
  const [inputEmail, setInputEmail] = useState({
    email: user.email,
  });
  const [inputCity, setInputCity] = useState({
    city: user.address.city,
  });
  const [inputStreet, setInputStreet] = useState({
    street: user.address.street,
  });
  const [inputSuite, setInputSuite] = useState({
    suite: user.address.suite,
  });
  // const dispatch = useAppDispatch();
  const onUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputName({
      name: target.value,
    });
  };
  const onUserNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputNickname({
      username: target.value,
    });
  };
  const onUserEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputEmail({
      email: target.value,
    });
  };
  const onUserStreetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputStreet({
      street: target.value,
    });
  };
  const onUserCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputCity({
      city: target.value,
    });
  };
  const onUserSuiteChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setInputSuite({
      suite: target.value,
    });
  };
  return (
    <>
      <Form.Item label="Name">
        <Input
          type="text"
          name="username"
          value={inputName.name}
          onChange={(e) => {
            onUserNameChange(e);
          }}
        />
      </Form.Item>
      <Form.Item label="Nickname">
        <Input
          type="text"
          name="nickname"
          value={inputNickname.username}
          onChange={(e) => {
            onUserNicknameChange(e);
          }}
        />
      </Form.Item>
      <Form.Item label="Email">
        <Input
          type="text"
          name="email"
          value={inputEmail.email}
          onChange={(e) => {
            onUserEmailChange(e);
          }}
        />
      </Form.Item>
      <Form.Item label="City">
        <Input
          type="text"
          name="city"
          value={inputCity.city}
          onChange={(e) => {
            onUserCityChange(e);
          }}
        />
      </Form.Item>
      <Form.Item label="Street">
        <Input
          type="text"
          name="street"
          value={inputStreet.street}
          onChange={(e) => {
            onUserStreetChange(e);
          }}
        />
      </Form.Item>
      <Form.Item label="Suite">
        <Input
          type="text"
          name="suite"
          value={inputSuite.suite}
          onChange={(e) => {
            onUserSuiteChange(e);
          }}
        />
      </Form.Item>
    </>
  );
};
