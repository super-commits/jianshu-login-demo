import {
  InputGroup,
  InputLeftAddon,
  Input,
  Stack,
  Checkbox,
  Flex,
  Text,
  Spacer,
  Button,
  Box,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaUser, FaLock, FaWeibo, FaWeixin, FaQq } from "react-icons/fa";
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const login = async e => {
    e.preventDefault()
    const user = {
      email,
      password
    }
    try {
      await axios.post('https://conduit.productionready.io/api/users/login', { user })
      alert('登陆成功！')
    } catch (error) {
      Object.entries(error.response.data.errors).forEach(arr => {
        alert(`${arr[0]}：${arr[1][0]}`)
      }) 
    }
  }
  return (
    <>
      <form onSubmit={e => login(e)}>
        <Stack spacing="10px">
          <InputGroup>
            <InputLeftAddon children={<FaUser />} />
            <Input placeholder="手机号或邮箱" onChange={e => setEmail(e.target.value)}/>
          </InputGroup>
          <InputGroup>
            <InputLeftAddon children={<FaLock />} />
            <Input type="password" placeholder="密码" onChange={e => setPassword(e.target.value)}/>
          </InputGroup>
          <Flex>
            <Checkbox>记住我</Checkbox>
            <Spacer />
            <Text>登陆遇到问题?</Text>
          </Flex>
          <Button type="submit">登陆</Button>
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
          社交账号登陆
        </Text>
      </Box>
      <Flex justifyContent="space-between" mt="20px" w="160px" mx="auto">
        <Icon as={FaWeibo} boxSize="30px"></Icon>
        <Icon as={FaWeixin} boxSize="30px"></Icon>
        <Icon as={FaQq} boxSize="30px"></Icon>
      </Flex>
    </>
  );
}

export default Login;
