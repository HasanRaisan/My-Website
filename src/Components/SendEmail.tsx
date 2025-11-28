import React from 'react';
import { useForm } from '@formspree/react'; // استيراد useForm

// نقطة النهاية (Endpoint ID) الخاص بك. لا تحتاج إلى الرابط الكامل
const FORM_ID = 'mblvleqr'; 

function SendEamil() {
    // استخدام الهوك (Hook) وتمرير الـ ID
    const [state, handleSubmit] = useForm(FORM_ID);

    // إذا نجح الإرسال، عرض رسالة نجاح ومسح الحقول
    if (state.succeeded) {
        // يمكنك إرجاع رسالة نجاح بسيطة هنا بدلاً من النموذج بالكامل
        return (
            <div className="flex flex-col gap-4 items-center justify-center h-48 bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-primary text-xl font-bold">🎉 Message Sent Successfully!</p>
                <p className="text-white">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
        );
    }

    return (
        <form 
            className="flex flex-col gap-4"
            onSubmit={handleSubmit} // 👈 استخدام دالة المعالجة المدمجة
        >
            {/* حقول الإدخال تبقى بنفس خصائص name */}
            <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-text-light focus:ring-primary focus:border-primary"
                placeholder="Name"
                type="text"
                name='name'
            />
            <input
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-text-light focus:ring-primary focus:border-primary"
                placeholder="Email"
                type="email"
                name='_replyto'
            />
            <textarea
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-text-light focus:ring-primary focus:border-primary"
                placeholder="Message"
                rows={4}
                defaultValue={""}
                name='message'
            />
            
            {/* زر الإرسال مع حالة التعطيل */}
            <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors disabled:opacity-50"
                type="submit"
                disabled={state.submitting} // 👈 تعطيل الزر أثناء الإرسال
            >
                <span className="truncate">
                    {state.submitting ? 'Sending...' : 'Send Message'}
                </span>
            </button>
            
            {/* عرض رسالة الخطأ في حالة الفشل */}
            {state.errors && (
                <p className="text-red-500 font-bold">
                    Error submitting form. Please check your inputs.
                </p>
            )}
        </form>
    );
}

export default SendEamil;