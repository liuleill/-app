import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
import recordStore from './recordStore';
import tagStore from './tagStore';

const store ={
    ...recordStore,
    ...tagStore,
};

console.log(store);

export default store;