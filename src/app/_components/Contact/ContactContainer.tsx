"use client";
import { BsMailbox, BsTelegram } from "react-icons/bs";
import SectionContainer from "../SectionContainer";
import ContactCard, { ContactCardProps } from "./ContactCard";
import { Check, CheckCircle, PhoneCall } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertTitle } from "../../../components/ui/alert";

const ContactContainer = () => {
  const formSchema = z.object({
    name: z.string().min(3, "Enter at least 3 characters"),
    mobile: z.string().min(11, "Invalid mobile").max(13, "Invalid mobile"),
    description: z.string().min(5, "Enter at least 5 characters"),
  });
  type ContactRequestDto = z.infer<typeof formSchema>;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactRequestDto>({
    defaultValues: undefined,
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const handleContact = async (data: ContactRequestDto) => {
    const req = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
    if (req.status == 200) reset();
  };

  const contactArray: ContactCardProps[] = [
    {
      title: "Email",
      icon: <BsMailbox className="text-yellow-500 size-4" />,
      url: "mailto:ghanbariarash1999@gmail.com",
    },
    {
      title: "Telegram",
      icon: <BsTelegram className="text-blue-500 size-4" />,
      url: "https://t.me/ProArash",
    },
  ];
  return (
    <SectionContainer
      title="Stay in touch"
      id="contact"
      lastItem
      icon={<PhoneCall className="size-4" />}
    >
      <div className="md:w-1/3 w-full flex flex-col gap-5">
        <form
          className="flex flex-col gap-3 rounded-2xl"
          onSubmit={handleSubmit(handleContact)}
        >
          <Label>{"Fullname"}</Label>
          <Input
            placeholder="Enter your fullname"
            type="text"
            {...register("name")}
            error={errors.name?.message}
          />
          <Label>{"Mobile"}</Label>
          <Input
            placeholder="+123456789"
            type="tel"
            {...register("mobile")}
            error={errors.mobile?.message}
          />
          <Label>{"Description"}</Label>
          <Textarea
            placeholder="Need a bespoke E-commerce, Business, or Portfolio Web Application or ..."
            {...register("description")}
            className={`min-h-[150px] max-h-[400px]`}
            error={errors.description?.message}
          />
          <Button disabled={!isValid || isSubmitting} loading={isSubmitting}>
            <Check className="size-4" />
            {"Send"}
          </Button>
          {isSubmitSuccessful && (
            <Alert variant={"success"}>
              <CheckCircle />
              <AlertTitle>{"Your request submited."}</AlertTitle>
            </Alert>
          )}
        </form>
        <div className="flex flex-wrap gap-3">
          {contactArray.map((v, i) => (
            <ContactCard key={i} props={v} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactContainer;
