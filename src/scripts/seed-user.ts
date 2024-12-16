import { ExecArgs } from "@medusajs/framework/types"
import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"

export default async function seedUser({ container }: ExecArgs) {
  const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
  const userService = container.resolve(Modules.USER)

  logger.info("Creating admin user...")
  
  try {
    await userService.create({
      email: "admin@medusa-test.com",
      password: "supersecret",
      role: "admin",
    })
    logger.info("Admin user created successfully")
  } catch (error) {
    if (error.code === "DUPLICATE_ERROR") {
      logger.info("Admin user already exists")
    } else {
      throw error
    }
  }
}
