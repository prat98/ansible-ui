import { Navigate, Route, Routes } from 'react-router-dom'
import { EditOrganization } from './controller/access/organizations/EditOrganization'
import { OrganizationDetails } from './controller/access/organizations/OrganizationDetails'
import { Organizations } from './controller/access/organizations/Organizations'
import { EditTeam } from './controller/access/teams/EditTeam'
import { TeamDetails } from './controller/access/teams/TeamDetails'
import { Teams } from './controller/access/teams/Teams'
import { CreateUser } from './controller/access/users/CreateUser'
import { EditUser } from './controller/access/users/EditUser'
import { UserDetailsPage } from './controller/access/users/UserDetails'
import { Users } from './controller/access/users/Users'
import { ExecutionEnvironments } from './controller/administration/execution-environments/ExecutionEnvironment'
import { Credentials } from './controller/resources/credentials/Credentials'
import { Hosts } from './controller/resources/hosts/Hosts'
import { Inventories } from './controller/resources/inventories/Inventories'
import { Projects } from './controller/resources/projects/Projects'
import Debug from './controller/settings/Debug'
import Settings from './controller/settings/Settings'
import Dashboard from './controller/views/Dashboard'
import { RouteE } from './route'

export function DemoRouter(): JSX.Element {
    return (
        <Routes>
            <Route path={RouteE.Dashboard} element={<Dashboard />} />
            {/* <Route path={RouteE.Jobs} element={JobsPage} /> */}
            {/* <Route path={RouteE.Schedules} element={SchedulesPage} /> */}
            {/* <Route path={RouteE.ActivityStream} element={ActivityStreeam} /> */}
            {/* <Route path={RouteE.WorkflowApprovals} element={WorkflowApprovalsPage} /> */}

            {/* <Route path={RouteE.Templates} element={TemplatesPage} /> */}

            <Route path={RouteE.Credentials} element={<Credentials />} />

            <Route path={RouteE.Projects} element={<Projects />} />
            {/* <Route path={RouteE.ProjectDetails} element={ProjectsDetailsPage} /> */}
            {/* <Route path={RouteE.ProjectEdit} element={ProjectEditPage} /> */}

            <Route path={RouteE.Inventories} element={<Inventories />} />

            <Route path={RouteE.Hosts} element={<Hosts />} />

            <Route path={RouteE.Organizations} element={<Organizations />} />
            <Route path={RouteE.OrganizationDetails} element={<OrganizationDetails />} />
            <Route path={RouteE.CreateOrganization} element={<EditOrganization />} />
            <Route path={RouteE.EditOrganization} element={<EditOrganization />} />

            <Route path={RouteE.Users} element={<Users />} />
            <Route path={RouteE.UserDetails} element={<UserDetailsPage />} />
            <Route path={RouteE.CreateUser} element={<CreateUser />} />
            <Route path={RouteE.EditUser} element={<EditUser />} />

            <Route path={RouteE.Teams} element={<Teams />} />
            <Route path={RouteE.TeamDetails} element={<TeamDetails />} />
            <Route path={RouteE.CreateTeam} element={<EditTeam />} />
            <Route path={RouteE.EditTeam} element={<EditTeam />} />

            {/* <Route path={RouteE.CredentialTypes} element={CredentialTypesPage} /> */}
            {/* <Route path={RouteE.Notifications} element={NotificationsPage} /> */}
            {/* <Route path={RouteE.ManagementJobs} element={ManagementJobsPage} /> */}
            {/* <Route path={RouteE.InstanceGroups} element={InstanceGroupsPage} /> */}
            {/* <Route path={RouteE.Instances} element={InstancesPage} /> */}
            {/* <Route path={RouteE.Applications} element={ApplicationsPage} /> */}
            <Route path={RouteE.ExecutionEnvironments} element={<ExecutionEnvironments />} />
            {/* <Route path={RouteE.TopologyView} element={TopologyView} /> */}

            <Route path={RouteE.Settings} element={Settings} />

            <Route path={RouteE.Debug} element={Debug} />
            <Route path="*" element={<Navigate to={RouteE.Login} replace />} />
        </Routes>
    )
}
