export default {
  login: async (_, args) => {
    console.log(args)
    return {
      userId: '1234',
      token: '456768fgghdfhfgh',
      expiration: '21341243214'
    }
  }
}