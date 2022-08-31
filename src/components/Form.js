import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Register from "./Register";
import Login from "./Login";

function Form() {
  return (
    <Box boxShadow="lg" w="400px" p="50px">
      <Tabs isFitted>
        <TabList>
          <Tab>登陆</Tab>
          <Tab>注册</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Register />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Form;
