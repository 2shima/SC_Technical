import CommonConstants from '@apiConstants/commonConstants';

export default class DemoAPI {
    public async fetchPost(postId: number) {
        const response = await fetch(`${CommonConstants.BASE_URL}/posts/${postId}`);
        return response;
    }
}