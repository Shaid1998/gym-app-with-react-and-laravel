
class BaseUrl{
    static BaseURL = 'http://127.0.0.1:8000/api';

    static AllTrainingData = this.BaseURL+'/alltraining';
    static SubscribeData = this.BaseURL+'/senddata';
    static SubscribeDataShow = this.BaseURL+'/allsubscribe';
}

export default BaseUrl