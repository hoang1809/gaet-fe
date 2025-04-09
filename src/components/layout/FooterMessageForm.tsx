"use client";

import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { API_URL } from "@/constant/app";
import { endpoints } from "@/api/apiEndpoints";
import { useTranslation } from "react-i18next";

export default function FooterMessageForm() {
    const {t} = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    content: "",
  });

  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const sendMessage = async (data: typeof formData) => {
    const response = await axios.post(
      `${API_URL}/api${endpoints.PostMessage}`,
      { data: data }
    );
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      setSuccessMsg(t('footer_message_sent_success'));
      setFormData({ name: "", email: "", title: "", content: "" });

      // Clear content after 5s
      setTimeout(() => setSuccessMsg(null), 3000);
    },
    onError: (error) => {
      setSuccessMsg(t('footer_message_sent_failed'));
      setTimeout(() => setSuccessMsg(null), 3000);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id.replace("footer-", "")]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div>
      <h4 className="text-lg font-semibold mb-6">{t('footer_send_message')}</h4>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          id="footer-name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white text-sm placeholder-gray-500 focus:ring-1 focus:ring-gaet-500 focus:border-gaet-500"
          placeholder={t('footer_name')}
        />
        <input
          type="email"
          id="footer-email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white text-sm placeholder-gray-500 focus:ring-1 focus:ring-gaet-500 focus:border-gaet-500"
          placeholder="Email"
        />
        <input
          type="text"
          id="footer-title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white text-sm placeholder-gray-500 focus:ring-1 focus:ring-gaet-500 focus:border-gaet-500"
          placeholder={t('footer_title')}
        />
        <textarea
          id="footer-content"
          value={formData.content}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white text-sm placeholder-gray-500 focus:ring-1 focus:ring-gaet-500 focus:border-gaet-500"
          placeholder={t('footer_content')}
        ></textarea>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-2 px-4 bg-gaet-600 text-white text-sm font-medium rounded-md hover:bg-gaet-700 transition-colors disabled:opacity-50"
        >
          {mutation.isPending ? t('footer_sending') : t('footer_send_message')}
        </button>
      </form>

      {successMsg && (
        <p className="mt-4 text-sm text-center text-green-400">{successMsg}</p>
      )}
    </div>
  );
}
