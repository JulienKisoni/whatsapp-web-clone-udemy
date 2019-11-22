import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const Images = new FilesCollection({
    storagePath: "assets/app/whatsapp/uploads/Images",
    downloadRoute: "/files/images",
    permissions: 0o755,
    cacheControl: "public, max-age=31536000",
  collectionName: 'Images',
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return 'Please upload image, with size equal or less than 10MB';
  }
});

if (Meteor.isServer) {
  Meteor.publish('files.images.all', function () {
    return Images.find().cursor;
  });
  Images.allowClient();
}

Meteor.methods({
    "Images.url": function(_id:string) {
        if(this.userId) {
            const image = Images.findOne(_id);
            const url:string = image.link();
            return url;
        } else {
            console.log('we dont know you');
            throw new Meteor.Error("You must be authenticated");
        }
    }
})