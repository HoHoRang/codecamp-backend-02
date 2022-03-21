/**
 * @swagger
 * /users:
 *   get:
 *     summary: 회원목록 가져오기
 *     tags: [Users]
 *     responses:
 *       200:
 *           description: 성공
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   properties:
 *                     email:
 *                       type: string
 *                       example: aaa@gmail.com
 *                     name:
 *                       type: string
 *                       example: 철수
 *                     phone:
 *                       type: string
 *                       example: 01012345678
 *                     personal:
 *                       type: string
 *                       example: 220110-2222222
 *                     prefer:
 *                       type: string
 *                       example: https://naver.com
 */
