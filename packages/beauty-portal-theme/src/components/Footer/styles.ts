import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    footer: {
      background: palette.grey[50],
      transition: 'color 0.25s ease-out 0s',
      fontSize: '.775rem',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      paddingTop: spacing(6),
      '& .c-social': {
        marginLeft: spacing(2.5),
        marginRight: spacing(2.5),
      },
    },
    wrapper: {
      paddingLeft: spacing(2.5),
      paddingRight: spacing(2.5),
    },
    navigationItems: {
      listStyleType: 'none',
      columns: 2,
      paddingLeft: 0,
      paddingBottom: spacing(2),
      marginTop: spacing(3.75),
      [breakpoints.up('md')]: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        paddingBottom: spacing(6),
      },
    },
    navigationItem: {
      marginBottom: spacing(1.25),
      [breakpoints.up('md')]: {
        marginBottom: 0,
        marginLeft: spacing(2.5),
        marginRight: spacing(2.5),
      },
    },
    navigationLink: {
      color: palette.common.white,
      display: 'flex',
      alignItems: 'center',
      fontSize: '.875rem',
      fontWeight: 700,
      lineHeight: 1.6,
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
      },
      '&:hover': {
        color: palette.primary.main
      },
      '& svg': {
        marginLeft: spacing(0.5),
        fill: palette.secondary.main,
      },
    },
    footerSecondary: {
      textAlign: 'center',
      backgroundColor: palette.grey[50],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: spacing(3),
      paddingBottom: spacing(3),
      [breakpoints.up('md')]: {
        paddingTop: spacing(4),
        paddingBottom: spacing(5),
      },
      '& p': {
        color: palette.common.white,
      },
      '& img': {
        marginRight: spacing(1.25),
        opacity: 0.5,
      },
    },
  })
);
