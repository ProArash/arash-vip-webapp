import SectionContainer from '../SectionContainer';
import AvatarContainer from '../AvatarContainer';
import { User } from 'lucide-react';

const AboutContainer = () => {
	return (
		<SectionContainer id="about" title="درباره من" icon={<User />}>
			<div className="flex md:flex-row flex-col-reverse items-center justify-between gap-5">
				<p className="text-justify">{`من آرش قنبری هستم، توسعه‌دهنده فول‌استک با بیش از دو سال تجربه در طراحی و پیاده‌سازی وب‌اپلیکیشن‌های مدرن. تخصص من در استفاده از فریم‌ورک‌ها و تکنولوژی‌هایی مانند Next.js، NestJS، TypeScript، Express.js، TypeORM و PrismaORM است و همچنین با سیستم‌های لینوکسی، Docker و Git آشنایی کامل دارم.

به کار تیمی علاقه‌مندم و در مواجهه با مسائل پیچیده فنی، با پشتکار و تمرکز به دنبال بهترین راه‌حل می‌گردم. یادگیری مباحث جدید دنیای تکنولوژی برای من یک انگیزه دائمی است و توانایی بالایی در یادگیری سریع دارم. صبور بودن، تعهد کاری و وجدان حرفه‌ای از ارزش‌هایی است که همیشه در مسیر شغلی‌ام رعایت می‌کنم.`}</p>
				<AvatarContainer />
			</div>
		</SectionContainer>
	);
};

export default AboutContainer;
