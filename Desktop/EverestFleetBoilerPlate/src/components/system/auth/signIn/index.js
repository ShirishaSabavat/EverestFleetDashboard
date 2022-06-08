import { connect } from 'react-redux';
import { useEffect, useState, useRef } from 'react';
import lodash from 'lodash';
import { Button, Space } from 'antd';

// helper components
import ShowError from 'components/layouts/showErrors';
import InputWrapper from 'components/kit/widgets/input';

// helper data
import { onFormValidation } from 'lib/helper';
import { userLogin as userLoginRedux } from 'redux/user/actions';
import EverestFleetLogo from '../../../../assets/images/everestFleetLogo.png';
import EverestCarr from '../../../../assets/images/everestCarr.jpg';
import { userLoginStructure, userLoginSchema } from './data';

// mutation/query
import USER_LOGIN from './mutation';

const Login = ({
  login,
  isLoading,
}) => {
  const inputRefs = useRef({ username: null, password: null });
  const [userLogin, setUserLogin] = useState(null);
  const [errors, setErrors] = useState(null);

  const onResetForm = () => {
    inputRefs.current.username.focus();
    setErrors(null);
    setUserLogin(lodash.cloneDeep(userLoginStructure));
  };

  useEffect(() => {
    onResetForm();
  }, []);

  const onInput = ({ name, value }) => {
    setUserLogin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmitForm = async () => {
    const {
      error,
      value: variables,
      ...keys
    } = await onFormValidation(userLoginSchema, userLogin);
    if (error) {
      const { paths } = keys;
      setErrors(keys);
      inputRefs.current[paths[0]].focus();
      return;
    }
    login({ variables, mutation: USER_LOGIN });
  };

  return (
    <div
      className="row bg-[#F1F0F1]"
      style={{
        overflowY: 'hidden', fontFamily: 'montserrat', backgroundSize: 'cover', height: 'auto',
      }}
    >
      <div
        className="col-6 py-5 pl-10 pr-0"
      >
        <div className="py-4 pl-10 pr-0 ml-5">
          <img src={EverestFleetLogo} alt="Logo" width="130px" />
          <h5 className="text-[#013453] text-3xl font-extrabold mt-3">Welcome back!</h5>

          <p className="text-[#86A1A4] text-xs">Please enter your details here.</p>
          <Space
            direction="vertical"
            size="large"
            className="w-full font-mulish-semi-bold"
          >
            {errors && (
              <ShowError
                {...errors}
                refs={inputRefs}
              />
            )}
            <InputWrapper
              label="Username"
              className="text-[#333333]"
              style={{ color: '#333333' }}
              mandatory
              error={errors?.paths.includes('username')}
              name="username"
              ref={(ref) => { inputRefs.current.username = ref; }}
              value={(userLogin && userLogin?.username) || null}
              onChange={({ target }) => onInput(target)}
            />
            <InputWrapper
              label="Password"
              mandatory
              error={errors?.paths.includes('password')}
              name="password"
              ref={(ref) => { inputRefs.current.password = ref; }}
              inputType="Password"
              value={(userLogin && userLogin?.password) || null}
              onChange={({ target }) => onInput(target)}
            />
            <Space direction="horizontal" className="w-full mt-4">
              <Button
                type="primary"
                loading={isLoading}
                onClick={onSubmitForm}
                className="w-full"
                style={{ backgroundColor: '#37BDC8', borderRadius: '20px', width: '280px' }}
                disabled={isLoading}
              >
                Login
              </Button>
              <Button
                onClick={onResetForm}
                className="w-full"
                style={{ borderColor: '#37BDC8', borderRadius: '20px', width: '280px' }}
                disabled={isLoading}
              >
                Reset form
              </Button>
            </Space>
          </Space>
        </div>
      </div>
      <div
        className="col-6 p-5"
        style={{
          backgroundImage: `url(${EverestCarr})`, backgroundColor: '#F1F0F1', backgroundSize: 'cover', height: '100vh', overflowY: 'hidden',
        }}
      >
        <div style={{ marginLeft: '70px' }} className="mt-4">
          <h className="text-[#333333] text-3xl font-bold">
            Everest Fleet
            <br />
            Driver Management
            <br />
            Dashboard
          </h>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  isLoading: userReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userCred) => dispatch(userLoginRedux(userCred)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
Login.displayName = 'Login User Component';
