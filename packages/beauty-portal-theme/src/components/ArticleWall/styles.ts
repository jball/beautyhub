import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles(({ breakpoints, palette, spacing }: Theme) =>
  createStyles({
    wall: {
      maxWidth: '1350px',
      paddingTop: spacing(2.5),
      paddingBottom: spacing(2.5),
      position: 'relative',
      marginLeft: spacing(4),
      marginRight: spacing(4),

      [breakpoints.up('md')]: {
        paddingTop: spacing(5),
        paddingBottom: spacing(5),
      },
      '& .swiper-container': {
        paddingBottom: spacing(2.5),
      },

      '& .swiper-scrollbar': {
        backgroundColor: 'transparent',
      },
      '& .swiper-scrollbar-drag': {
        backgroundColor: palette.grey[20],
      },
      '& h4': {
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '1.75rem',
        fontWeight: 400,
        margin: 0,
        marginBottom: spacing(1),
        [breakpoints.up('md')]: {
          fontSize: '2.30rem',
        },
      },
      '& p': {
        color: palette.grey[100],
      },
    },
    sectionTitle: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: spacing(1.875),
      [breakpoints.up('md')]: {
        marginBottom: spacing(2),
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    sectionDescription: {
      paddingBottom: '10px',
    },
    sectionLink: {
      color: palette.grey[100],
      fontSize: '.600rem',
      fontWeight: 700,
      border: `1px solid ${palette.grey[50]}`,
      padding: '5px 50px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      backgroundImage: `linear-gradient(120deg,${palette.primary.main} 0%,${palette.primary.main} 100%)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% .1875rem',
      backgroundPosition: '0 100%',
      [breakpoints.up('md')]: {
        fontSize: '1.125rem',
        marginLeft: spacing(3),
        marginBottom: spacing(1),
        alignSelf: 'center',
      },
      '&:hover, &:focus': {
        backgroundImage: `linear-gradient(120deg,${palette.grey[100]} 0%,${palette.common.black} 100%)`,
      },
    },
    sliderTitle: {
      fontSize: '1.375rem',
      fontWeight: 600,
      lineHeight: 0.6,
      letterSpacing: 0,
      margin: 0,
      marginBottom: spacing(1),
      [breakpoints.up('md')]: {
        fontSize: '1.75rem',
      },
    },
    articleNav: {
      textAlign: 'center',
      paddingTop: '20px',
    },
    sectionDivider: {
      borderTop: `4px solid ${palette.primary.main}`,
      height: '20px',
      maxWidth: '40px',
    },
  })
);
