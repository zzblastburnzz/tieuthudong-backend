// ==== src/modules/ai/ai.service.ts ====
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class AiService {
  constructor(private configService: ConfigService) {}

  async askGpt(message: string, age: number) {
    const prompt = `Trẻ ${age} tuổi hỏi: ${message}. Hãy trả lời đơn giản, dễ hiểu.`;
    const apiKey = this.configService.get<string>('OPENAI_API_KEY');

    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'Bạn là một người bạn đồng hành AI thân thiện và dễ hiểu cho trẻ em.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data.choices[0].message.content;
  }
}