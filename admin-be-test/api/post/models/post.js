module.exports = {
    /**
     * Triggered before user creation.
     */
    lifecycles: {
      async afterFind(result, params, populate){
        result.forEach((e)=>{
            delete e.users;
            delete e.users_permissions_user;
        })
      },
      async afterFindOne(result, params, populate){
        delete result.users;
        delete result.users_permissions_user;
      },
    },
  };
  