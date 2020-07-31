import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 3,
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: `1px solid ${palette.primary.main}`,
      backgroundColor: palette.common.black,
    },
    headerContentWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      [breakpoints.up('md')]: {
        justifyContent: 'flex-start',
      },
    },
    logo: {
      [breakpoints.up('md')]: {
        margin: 0,
        marginRight: spacing(3.75),
        marginBottom: spacing(-0.25),
      },
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '1.6rem',
      fontWeight: 500,
      color: palette.primary.main,
      '& span': {
        color: palette.secondary.main,
      },
    },
    pad20: {
      padding: spacing(2.5),
    },
    follow: {
      position: 'absolute',
      right: 120,
      [breakpoints.up('md')]: {
        right: 80,
      },
      '& svg': {
        fill: palette.common.white,
      },
      '&:focus-within button': {
        backgroundColor: palette.primary.main,
      },
    },
    followButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      height: 60,
      width: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      '&:hover': {
        backgroundColor: palette.primary.main,
      },
      '&:hover > div, &:focus > div': {
        height: 'auto',
      },
    },
    followPopup: {
      position: 'fixed',
      top: 60,
      right: 0,
      backgroundColor: palette.common.white,
      width: '100vw',
      boxShadow: '0 0 10px 4px rgba(0,0,0,.1)',
      height: '0.1%',
      transition: 'height 0.3s ease-in-out',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      [breakpoints.up('md')]: {
        position: 'absolute',
        minWidth: 340,
        right: -20,
        width: 340,
        '&:focus-within': {
          height: 'auto',
        },
      },
      '&:before': {
        content: '""',
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0,
        height: 4,
        backgroundColor: palette.primary.main,
      },
      '& .c-social': {
        '& ul': {
          justifyContent: 'center',
        },
        '& svg': {
          fill: palette.common.black,
        },
      },
    },
    newsletter: {
      marginTop: spacing(2.5),
    },
    newsletterSubscribeButton: {
      fontSize: '.875rem',
      fontWeight: 700,
      backgroundColor: palette.primary.main,
      color: palette.common.black,
      paddingTop: spacing(1.25),
      paddingBottom: spacing(1.25),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      display: 'block',
      position: 'relative',
      textAlign: 'center',
      transform: 'perspective(1px) translateZ(0)',
      '&:before': {
        content: '""',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: palette.common.black,
        transform: 'scaleX(0)',
        transformOrigin: '0 50%',
        transitionProperty: 'transform',
        transitionDuration: '0.3s',
        transitionTimingFunction: 'ease-out',
      },
      '&:hover': {
        color: palette.common.white,
        '&:before': {
          transform: 'scaleX(1)',
        },
      },
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        paddingTop: spacing(1.75),
        paddingBottom: spacing(1.75),
        paddingLeft: spacing(2.5),
        paddingRight: spacing(2.5),
      },
    },
    siteLogin: {
      position: 'absolute',
      right: 140,
      color: palette.common.white,
      display: 'flex',
      alignItems: 'center',
      fontSize: '.875rem',
      fontWeight: 700,
      lineHeight: 1.6,
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
      '& svg': {
        marginLeft: spacing(0.5),
        fill: palette.secondary.main,
      },
    },
    siteSearch: {
      position: 'absolute',
      right: 60,
      [breakpoints.up('md')]: {
        right: 20,
      },
      '& svg': {
        fill: palette.common.white,
      },
    },
    searchButton: {
      color: palette.common.white,
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      height: 60,
      width: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '&:hover': {
        backgroundColor: palette.primary.main,
      },
    },
  })
);
