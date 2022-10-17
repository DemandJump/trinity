import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  ActionArchive1,
  ActionArchive2,
  ActionBarchart,
  ActionBulletedList,
  ActionClose,
  ActionDownload,
  ActionEmail,
  ActionFilter1,
  ActionFilter2,
  ActionHide,
  ActionInfo,
  ActionMenu,
  ActionMore,
  ActionMove,
  ActionNumberedList,
  ActionRedirectOut,
  ActionRefresh1,
  ActionRefresh2,
  ActionSearch,
  ActionShow,
  ActionSortList,
  ActionTrash,
  ActionUpload,
  DjLogoStandardSize,
  IconAdmin,
  IconAnalytics,
  IconAttribution,
  IconBookmark,
  IconCompetitors,
  IconCompetitorsSwords,
  IconConnectors,
  IconDjUniversity,
  IconFileTicket,
  IconGroups,
  IconHelpCenter,
  IconHelpCircle,
  IconHome,
  IconKeywordList,
  IconKeywords,
  IconManageContent,
  IconManagePillarTopics,
  IconPrimaryDomain,
  IconResearchAndDiscovery,
  IconSetPillarTopics,
  IconSettings,
  IconSinglePillar,
  IconSubscription,
  IconSupport,
  IconTrackKeywords,
  IconTrackTicket,
  IconUserProfile,
  IconUsers,
  NavigationArrowBack,
  NavigationArrowDown,
  NavigationArrowLeft,
  NavigationArrowRight,
  NavigationArrowUp,
  NavigationCollapse,
  NavigationExpand,
} from "../Icons";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Icons",
  parameters: {
    docs: {
      // page: README,
    },
  },
  args: {},
} as Meta;
const defaultStyle = {
  width: "24px",
};

type iconListT = { icon: JSX.Element; label: string };
const iconList = [
  {
    icon: <ActionArchive1 style={defaultStyle} />,
    label: "ActionArchive1",
  },
  {
    icon: <ActionArchive2 style={defaultStyle} />,
    label: "ActionArchive2",
  },
  {
    icon: <ActionBarchart style={defaultStyle} />,
    label: "ActionBarchart",
  },
  {
    icon: <ActionBulletedList style={defaultStyle} />,
    label: "ActionBulletedList",
  },
  {
    icon: <ActionClose style={defaultStyle} />,
    label: "ActionClose",
  },
  {
    icon: <ActionDownload style={defaultStyle} />,
    label: "ActionDownload",
  },
  {
    icon: <ActionEmail style={defaultStyle} />,
    label: "ActionEmail",
  },
  {
    icon: <ActionFilter1 style={defaultStyle} />,

    label: "ActionFilter1",
  },
  {
    icon: <ActionFilter2 style={defaultStyle} />,

    label: "ActionFilter2",
  },
  {
    icon: <ActionHide style={defaultStyle} />,

    label: "ActionHide",
  },
  {
    icon: <ActionInfo style={defaultStyle} />,

    label: "ActionInfo",
  },
  {
    icon: <ActionMenu style={defaultStyle} />,

    label: "ActionMenu",
  },
  {
    icon: <ActionMore style={defaultStyle} />,

    label: "ActionMore",
  },
  {
    icon: <ActionMove style={defaultStyle} />,

    label: "ActionMove",
  },
  {
    icon: <ActionNumberedList style={defaultStyle} />,

    label: "ActionNumberedList",
  },
  {
    icon: <ActionRedirectOut style={defaultStyle} />,

    label: "ActionRedirectOut",
  },
  {
    icon: <ActionRefresh1 style={defaultStyle} />,

    label: "ActionRefresh1",
  },
  {
    icon: <ActionRefresh2 style={defaultStyle} />,

    label: "ActionRefresh2",
  },
  {
    icon: <ActionSearch style={defaultStyle} />,

    label: "ActionSearch",
  },
  {
    icon: <ActionShow style={defaultStyle} />,

    label: "ActionShow",
  },
  {
    icon: <ActionSortList style={defaultStyle} />,

    label: "ActionSortList",
  },
  {
    icon: <ActionTrash style={defaultStyle} />,

    label: "ActionTrash",
  },
  {
    icon: <ActionUpload style={defaultStyle} />,

    label: "ActionUpload",
  },
  {
    icon: <DjLogoStandardSize style={defaultStyle} />,

    label: "DjLogoStandardSize",
  },
  {
    icon: <IconAdmin style={defaultStyle} />,

    label: "IconAdmin",
  },
  {
    icon: <IconAnalytics style={defaultStyle} />,

    label: "IconAnalytics",
  },
  {
    icon: <IconAttribution style={defaultStyle} />,

    label: "IconAttribution",
  },
  {
    icon: <IconBookmark style={defaultStyle} />,

    label: "IconBookmark",
  },
  {
    icon: <IconCompetitors style={defaultStyle} />,

    label: "IconCompetitors",
  },
  {
    icon: <IconCompetitorsSwords style={defaultStyle} />,

    label: "IconCompetitorsSwords",
  },
  {
    icon: <IconConnectors style={defaultStyle} />,

    label: "IconConnectors",
  },
  {
    icon: <IconDjUniversity style={defaultStyle} />,

    label: "IconDjUniversity",
  },
  {
    icon: <IconFileTicket style={defaultStyle} />,

    label: "IconFileTicket",
  },
  {
    icon: <IconGroups style={defaultStyle} />,

    label: "IconGroups",
  },
  {
    icon: <IconHelpCenter style={defaultStyle} />,

    label: "IconHelpCenter",
  },
  {
    icon: <IconHelpCircle style={defaultStyle} />,

    label: "IconHelpCircle",
  },
  {
    icon: <IconHome style={defaultStyle} />,

    label: "IconHome",
  },
  {
    icon: <IconKeywordList style={defaultStyle} />,

    label: "IconKeywordList",
  },
  {
    icon: <IconKeywords style={defaultStyle} />,

    label: "IconKeywords",
  },
  {
    icon: <IconManageContent style={defaultStyle} />,

    label: "IconManageContent",
  },
  {
    icon: <IconManagePillarTopics style={defaultStyle} />,

    label: "IconManagePillarTopics",
  },
  {
    icon: <IconPrimaryDomain style={defaultStyle} />,

    label: "IconPrimaryDomain",
  },
  {
    icon: <IconResearchAndDiscovery style={defaultStyle} />,

    label: "IconResearchAndDiscovery",
  },
  {
    icon: <IconSetPillarTopics style={defaultStyle} />,

    label: "IconSetPillarTopics",
  },
  {
    icon: <IconSettings style={defaultStyle} />,

    label: "IconSettings",
  },
  {
    icon: <IconSinglePillar style={defaultStyle} />,

    label: "IconSinglePillar",
  },
  {
    icon: <IconSubscription style={defaultStyle} />,

    label: "IconSubscription",
  },
  {
    icon: <IconSupport style={defaultStyle} />,

    label: "IconSupport",
  },
  {
    icon: <IconTrackKeywords style={defaultStyle} />,

    label: "IconTrackKeywords",
  },
  {
    icon: <IconTrackTicket style={defaultStyle} />,

    label: "IconTrackTicket",
  },
  {
    icon: <IconUserProfile style={defaultStyle} />,

    label: "IconUserProfile",
  },
  {
    icon: <IconUsers style={defaultStyle} />,

    label: "IconUsers",
  },
  {
    icon: <NavigationArrowBack style={defaultStyle} />,

    label: "NavigationArrowBack",
  },
  {
    icon: <NavigationArrowDown style={defaultStyle} />,

    label: "NavigationArrowDown",
  },
  {
    icon: <NavigationArrowLeft style={defaultStyle} />,
    label: "NavigationArrowLeft",
  },
  {
    icon: <NavigationArrowRight style={defaultStyle} />,
    label: "NavigationArrowRight",
  },
  {
    icon: <NavigationArrowUp style={defaultStyle} />,
    label: "NavigationArrowUp",
  },
  {
    icon: <NavigationCollapse style={defaultStyle} />,
    label: "NavigationCollapse",
  },
  {
    icon: <NavigationExpand style={defaultStyle} />,
    label: "NavigationExpand",
  },
];

export const Default: Story = () => {
  return (
    <>
      <h2>Icons</h2>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        {iconList.map((obj) => {
          return (
            <Card sx={{ margin: "10px", width: "15%" }}>
              <Grid sx={{ padding: "10px" }}>{obj.icon}</Grid>
              <Grid sx={{ padding: "10px" }}>{obj.label}</Grid>
            </Card>
          );
        })}
      </Grid>
    </>
  );
};
Default.storyName = "Icons";
