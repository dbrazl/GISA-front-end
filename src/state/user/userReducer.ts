const userReducer = (state: any, action: any) => {
  switch(action.type) {
    case '@USER/SIGN_IN_REQUEST':
      return {
        ...state,
        profile: {
          email: '',
        },
        status: {
          loading: true,
          error: false,
          signed: false,
        }
      };

    case '@USER/SIGN_IN_SUCCESS':
      return {
        ...state,
        profile: {
          email: action.payload.email,
        },
        status: {
          loading: false,
          error: false,
          signed: true,
        }
      }

    case '@USER/SIGN_IN_FAILED':
      return {
        ...state,
        profile: {
          email: '',
        },
        status: {
          loading: false,
          error: true,
          signed: false,
        }
      }

    default:
      return;
  }
}

export default userReducer;