import Profile from "../schema/profile.schema.js";
import uploadFile from "../services/storage.js";
//CRUD profle

export const createProfile = async (req, res) => {
  try {
    const { username, age, address, contact } = req.body;
    const file = req.file;
    if(!file){
      return res.status(400).json({message:"image required"});
    }
console.log("reg", createProfile);
    const uploaded = await uploadFile(file.buffer, file.originalname);
    const makeProfile =  new Profile({
      username,
      image: uploaded.url,
      age,
      address,
      contact,
    });
    await makeProfile.save()
    res
      .status(201)
      .json({ message: "Profile created successfully", makeProfile });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getProfile = async (req,res)=> {
    try {
const data = await Profile.find()
if(!data) {
      res.status(401).json({ message: "No data" });
}
res.status(201).json({message :"data fetched"})
    } catch(err){
res.status(500).json({message :"couldn't fetch"})
    }
}

export const editProfile = async (req,res)=> {
    try {
const {id} = req.params;
const { username, age, address, contact } = req.body;
    const file = req.file;
    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    if (file) {
      const uploaded = await uploadFile(file.buffer, file.originalname);
      profile.image = uploaded.url;
    }
    if (username) profile.username = username;
    if (age) profile.age = age;
    if (address) profile.address = address;
    if (contact) profile.contact = contact;

    await profile.save();

    res.status(200).json({ message: "Profile updated successfully", profile });
    } catch(err){
res.status(500).json({ error: err.message });
    }
};

export const deleteProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    if (profile.imageFileId) {
      await imagekit.deleteFile(profile.imageFileId);
    }
    await Profile.findByIdAndDelete(id);

    res.status(200).json({ message: "Profile and image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};