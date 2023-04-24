import { instance } from '../axios/axios';

const profileAPI = {
  // UserProfile 데이터 서버통신 함수
  async getUserInfo(accountname) {
    const response = await instance.get(`/profile/${accountname}`);
    return response.data;
  },

  // FollweList 데이터 서버통신 함수
  async getFollowerList(accountName) {
    const response = await instance.get(`/profile/${accountName}/follower`);
    return response.data;
  },

  // FollowingList 데이터 서버통신 함수
  async getFollowingdata(accountName) {
    const response = await instance(`/profile/${accountName}/following`);
    return response.data;
  },

  // ModifyPrifle 데이터 서버통신 함수
  async putModifyData(username, accountname, intro, image) {
    const userData = {
      user: {
        username,
        accountname,
        intro,
        image,
      },
    };
    const response = await instance.put(`/user`, userData);
    console.log(response);
    return response.data;
  },
};
export default profileAPI;
