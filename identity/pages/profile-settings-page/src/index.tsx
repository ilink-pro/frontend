export default () => null

export const getServerSideProps = () => ({
  redirect: {
    destination: '/auth/kyc',
    permanent: false,
  },
})
