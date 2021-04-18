import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRequestAppCreateWithoutAppConsultationInput } from "../inputs/LogRequestAppCreateWithoutAppConsultationInput";
import { LogRequestAppUpdateWithoutAppConsultationInput } from "../inputs/LogRequestAppUpdateWithoutAppConsultationInput";
import { LogRequestAppWhereUniqueInput } from "../inputs/LogRequestAppWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class LogRequestAppUpsertWithWhereUniqueWithoutAppConsultationInput {
  @TypeGraphQL.Field(_type => LogRequestAppWhereUniqueInput, {
    nullable: false
  })
  where!: LogRequestAppWhereUniqueInput;

  @TypeGraphQL.Field(_type => LogRequestAppUpdateWithoutAppConsultationInput, {
    nullable: false
  })
  update!: LogRequestAppUpdateWithoutAppConsultationInput;

  @TypeGraphQL.Field(_type => LogRequestAppCreateWithoutAppConsultationInput, {
    nullable: false
  })
  create!: LogRequestAppCreateWithoutAppConsultationInput;
}
