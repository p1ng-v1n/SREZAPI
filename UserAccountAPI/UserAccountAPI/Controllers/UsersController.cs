using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserAccountAPI.Models;

namespace UserAccountAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserAccountDBContext _context;

        public UsersController(UserAccountDBContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("Auth")]
        public ActionResult Auth(string login, string password)
        {
            
            var currentUser = _context.Users.Where(x => x.Email == login).FirstOrDefault();
            if (currentUser != null)
            {
                if (currentUser.Password == password)
                {
                    return Ok();
                }
                else return NotFound("Неверный логин или пароль");
            }
            else return NotFound("Пользователь не найден");
        }
        [HttpPost]
        [Route("PostUser")]
        public async Task<ActionResult<User>> PostUser([FromBody] User client)
        {
            _context.Users.Add(client);
            await _context.SaveChangesAsync();
            return Ok();
        }
        [HttpPost]
        [Route("PasswordRecovery")]
        public async Task<ActionResult<User>> PasswordRecovery(string email)
        {
            var currentUser = _context.Users.Where(x => x.Email == email).FirstOrDefault();
            if (currentUser != null)
            {
                return Ok();
            }
            else return NotFound();
        }
        [HttpPost]
        [Route("ChangePassword")]
        public async Task<ActionResult<User>> ChangePassword(string email, string password)
        {
            var currentUser = _context.Users.Where(x => x.Email == email).FirstOrDefault();
            if (currentUser != null)
            {
                currentUser.Password = password;
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return NotFound();
        }

        [HttpGet]
        public async Task<ActionResult<User>> GetClient(string email)
        {
            var client = await _context.Users.Where(x=>x.Email==email).FirstOrDefaultAsync();

            if (client == null)
            {
                return NotFound();
            }

            return client;
        }


    }
}
