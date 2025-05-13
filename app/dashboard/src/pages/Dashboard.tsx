import { Box, VStack } from "@chakra-ui/react";
import { CoreSettingsModal } from "components/CoreSettingsModal";
import { DeleteUserModal } from "components/DeleteUserModal";
import { Filters } from "components/Filters";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { HostsDialog } from "components/HostsDialog";
import { NodesDialog } from "components/NodesModal";
import { NodesUsage } from "components/NodesUsage";
import { QRCodeDialog } from "components/QRCodeDialog";
import { ResetAllUsageModal } from "components/ResetAllUsageModal";
import { ResetUserUsageModal } from "components/ResetUserUsageModal";
import { RevokeSubscriptionModal } from "components/RevokeSubscriptionModal";
import { UserDialog } from "components/UserDialog";
import { UsersTable } from "components/UsersTable";
import { fetchInbounds, useDashboard } from "contexts/DashboardContext";
import { FC, useEffect } from "react";
import { Statistics } from "../components/Statistics";

export const Dashboard: FC = () => {
  useEffect(() => {
    useDashboard.getState().refetchUsers();
    fetchInbounds();
  }, []);
  return (
    <VStack justifyContent="space-between" minH="100vh" rowGap={6} spacing={0}>
      <Box w="full" maxW="1400px" mx="auto">
        <Header py={4} />
        <Statistics mt="6" mb="8" layerStyle="card" transition="all 0.3s ease" _hover={{ boxShadow: 'card-hover', _dark: { boxShadow: 'card-hover-dark' } }} />
        <Filters mb="6" />
        <Box layerStyle="card" transition="all 0.3s ease" _hover={{ boxShadow: 'card-hover', _dark: { boxShadow: 'card-hover-dark' } }}>
          <UsersTable />
        </Box>
        <UserDialog />
        <DeleteUserModal />
        <QRCodeDialog />
        <HostsDialog />
        <ResetUserUsageModal />
        <RevokeSubscriptionModal />
        <NodesDialog />
        <NodesUsage />
        <ResetAllUsageModal />
        <CoreSettingsModal />
      </Box>
      <Footer py={6} w="full" />
    </VStack>
  );
};

export default Dashboard;
