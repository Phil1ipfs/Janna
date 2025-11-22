import 'dart:convert';
import 'package:http/http.dart' as http;

class DropdownService {
  static const String baseUrl = 'http://10.0.2.2:5000/api';

  static Future<List<dynamic>> get(String endpoint) async {
    final url = Uri.parse('$baseUrl/dropdown/fields');
    final response = await http.get(url);
    if (response.statusCode == 200) {
      return jsonDecode(response.body);
    } else {
      throw Exception('GET failed: ${response.statusCode}');
    }
  }
}
