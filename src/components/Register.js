import {
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  Flex,
  Text,
  Button,
  Box,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaUser, FaLock, FaWeixin, FaQq, FaPhoneAlt } from "react-icons/fa";
import axios from 'axios'
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const register = async e => {
    e.preventDefault()
    const user = {
      username,
      email,
      password
    }
    try {
      await axios.post('https://conduit.productionready.io/api/users', { user })
      alert('注册成功！')
    } catch (error) {
      Object.entries(error.response.data.errors).forEach(arr => {
        alert(`${arr[0]}：${arr[1][0]}`)
      }) 
    }
  }
  return (
    <>
      <form onSubmit={e => register(e)}>
        <Stack spacing="10px">
          <InputGroup>
            <InputLeftAddon children={<FaUser />} />
            <Input placeholder="你的昵称" onChange={e => setUsername(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaPhoneAlt />} />
            <Input placeholder="手机号" onChange={e => setEmail(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input placeholder="设置密码" onChange={e => setPassword(e.target.value)}/>
          </InputGroup>
          <Button type="submit">注册</Button>
          <Text fontSize="12px" textAlign="center">
            点击 “注册” 即表示您同意并愿意遵守简书
            <br />
            <a
              href="https://www.jianshu.com/p/c44d171298ce"
              target="_blank"
              rel="noreferrer"
            >
              用户协议
            </a>{" "}
            和{" "}
            <a
              href="https://www.jianshu.com/p/2ov8x3"
              target="_blank"
              rel="noreferrer"
            >
              隐私政策
            </a>{" "}
            。
          </Text>
        </Stack>
      </form>
      <Box mt="40px" position="relative">
        <Divider w="80%" mx="auto" />
        <Text
          fontSize="12px"
          pos="absolute"
          background="#fff"
          top="-8px"
          w="40%"
          left="50%"
          ml="-20%"
          textAlign="center"
        >
          社交账号直接注册
        </Text>
      </Box>
      <Flex justifyContent="space-between" mt="20px" w="100px" mx="auto">
        <Icon as={FaWeixin} boxSize="30px" />
        <Icon as={FaQq} boxSize="30px" />
      </Flex>
    </>
  );
}

export default Register;
