import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IContact extends Document {
	name: string;
	mobile: string;
	description: string;
}

const ContactSchema = new Schema<IContact>({
	name: String,
	mobile: String,
	description: String,
});

const Contact: Model<IContact> =
	mongoose.models.Contact ||
	mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
