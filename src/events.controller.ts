import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';

// @Controller('/events')
@Controller({
  path: '/events',
})
export class EventsController {
  @Get()
  findAll() {
    return [
      { id: 1, name: 'First Event' },
      { id: 2, name: 'Second Event' },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return { id: 1, name: 'First Event' };
  }

  @Post()
  create(@Body() input) {
    return input;
  }

  // @Put -> used to send all properties of a resource.
  @Patch(':id') // -> used to update only certain properties of a resource (record)
  update(@Param('id') id, @Body() input) {
    return input;
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {}
}
